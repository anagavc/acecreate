// components/LottieAnimation.tsx
import dynamic from "next/dynamic";
import { ComponentProps } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type LottieAnimationProps = ComponentProps<typeof Lottie>;

const LottieAnimation: React.FC<LottieAnimationProps> = (props) => {
  return <Lottie {...props} />;
};

export default LottieAnimation;
