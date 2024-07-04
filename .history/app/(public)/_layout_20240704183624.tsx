import { Stack } from "expo-router";
import React from "react";

export default function PublicLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="welcome" />
			<Stack.Screen name="sign-up" />
			<Stack.Screen name="sign-in" />
		</Stack>
	);
}
