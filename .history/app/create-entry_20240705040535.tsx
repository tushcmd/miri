import { View } from "react-native";

import { H1, Muted } from "@/components/ui/typography";

export default function Modal() {
	return (
		<View className="flex items-center justify-center flex-1 p-4 bg-background gap-y-4">
			<H1 className="text-center"></H1>
			<Muted className="text-center"></Muted>
		</View>
	);
}