import { View } from "react-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H1, Muted } from "@/components/ui/typography";
import { useSupabase } from "@/context/supabase-provider";

export default function TabTwoScreen() {
	const { signOut } = useSupabase();

	return (
		<View className="items-center justify-center flex-1 p-4 bg-background gap-y-4">
			<H1 className="text-center">Sign Out</H1>
			<Muted className="text-center">
				Sign out of the app.
			</Muted>
			<Button
				className="w-full"
				size="default"
				variant="default"
				onPress={() => {
					signOut();
				}}
			>
				<Text>Sign Out</Text>
			</Button>
		</View>
	);
}
