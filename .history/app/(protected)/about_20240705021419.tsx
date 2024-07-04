import { View } from "react-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H1, Muted } from "@/components/ui/typography";
import React from "react";

export default function TabThreeScreen() {

	return (
		<View className="items-center justify-center flex-1 p-4 bg-background gap-y-4">
			<H1 className="text-center">About Miri</H1>
			<Muted className="text-center">
				Miri is a personal journalling app to help you keep track of your mental health.
			</Muted>
            <H1 className="text-center">Author</H1>
			<Muted className="text-center">
				This app is created and maintained by <a className="italic" href="https://tushdev.co/">Muturi David</a>
			</Muted>
            
			<Button
				className="w-full"
				size="default"
				variant="default"
			>
				<Text>Report Bug</Text>
			</Button>
		</View>
	);
}
