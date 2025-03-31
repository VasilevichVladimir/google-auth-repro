import React, { useEffect, useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = useState<any>(null);

  const redirectUri = AuthSession.makeRedirectUri({
    native: 'com.uhapp.uhapp:/oauth2redirect/google',
  });

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '241614819577-uogi2urto66705nvv7hpm1coi73jcj7d.apps.googleusercontent.com',
    iosClientId:
      '241614819577-a0eqle94o3bjfvur0mlo6bbo1aktacrs.apps.googleusercontent.com',
    redirectUri,
  });

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      fetchUserInfo(response.authentication.accessToken);
    }
  }, [response]);

  const fetchUserInfo = async (token: string) => {
    try {
      const res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await res.json();
      setUserInfo(user);
    } catch (error) {
      console.error('Failed to fetch user info', error);
    }
  };

  return (
    <View style={styles.container}>
      {userInfo ? (
        <Text>Welcome, {userInfo.name}</Text>
      ) : (
        <Button
          title="Sign in with Google"
          onPress={() => promptAsync()}
          disabled={!request}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
