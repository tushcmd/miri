import { cssInterop } from "nativewind";
import { SafeAreaView } from "react-native";

const StyledSafeAreaView = cssInterop(SafeAreaView, {
	className: "style",
});

export { StyledSafeAreaView as SafeAreaView };
