import { useRouter } from "expo-router";
import { View } from "react-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H1, Muted } from "@/components/ui/typography";
import React from "react";

export default function TabOneScreen() {
	const router = useRouter();

	return (
		<View className="items-center justify-center flex-1 p-4 bg-background gap-y-4">
			<H1 className="text-center">Home</H1>
			<Muted className="text-center">
				You are now authenticated and this session will persist even after
				closing the app.
			</Muted>
			<Button
				className="w-full"
				variant="default"
				size="default"
				onPress={() => {
					router.push("/modal");
				}}
			>
				<Text>Open Modal</Text>
			</Button>
		</View>
	);
}
