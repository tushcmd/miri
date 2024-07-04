import { View, Linking } from "react-native";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H1, Muted } from "@/components/ui/typography";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

export default function TabThreeScreen() {
	const navigation = useNavigation();

	const handleOpenLink = async (url: string) => {
		const supported = await Linking.canOpenURL(url);
		if (supported) {
			await Linking.openURL(url);
		} else {
			console.log(`Don't know how to open this URL: ${url}`);
		}
	};

	return (
		<View className="items-center justify-center flex-1 p-4 bg-background gap-y-4">
			<H1 className="text-center">About Miri</H1>
			<Muted className="text-center">
				Miri is a personal journalling app to help you keep track of your mental
				health.
			</Muted>
			<H1 className="text-center">Author</H1>
			<Muted className="text-center">
				This app is created and maintained by{" "}
				<Text className="italic" onPress={() => handleOpenLink("https://tushdev.co/")}>
					Muturi David
				</Text>
			</Muted>

			<Button
				className="w-full"
				size="default"
				variant="default"
				onPress={() => handleOpenLink("https://github.com/tushcmd/miri/issues")}
			>
				<Text>
					Report Bug <Ionicons name="bug-outline" />
				</Text>
			</Button>
		</View>
	);
}