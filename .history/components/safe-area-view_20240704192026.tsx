// import { cssInterop } from "nativewind";
// import { SafeAreaView } from "react-native-safe-area-context";

// const StyledSafeAreaView = cssInterop(SafeAreaView, {
// 	className: "style",
// });

// export { StyledSafeAreaView as SafeAreaView };

import { cssInterop } from "nativewind";
import { SafeAreaView as OriginalSafeAreaView } from "react-native-safe-area-context";

const StyledSafeAreaView = cssInterop(OriginalSafeAreaView, {
  className: "style",
});

// Explicitly type StyledSafeAreaView as a React component
const SafeAreaView = StyledSafeAreaView as unknown as React.ComponentType<React.ComponentProps<typeof OriginalSafeAreaView>>;
export { SafeAreaView };
