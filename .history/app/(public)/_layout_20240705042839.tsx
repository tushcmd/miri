import { Stack } from "expo-router";

export default function PublicLayout() {
	return (
		<Stack
		className='py-6'
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
