import { View} from 'react-native'
import { H2, Muted } from "@/components/ui/typography";
import React from 'react'

export default function CreateEntry() {
  return (
	<View className="flex flex-1 items-center justify-center bg-background p-4 gap-y-4">
	  <Muted className="text-center">create-entry</Muted>
	</View>
  );
}
