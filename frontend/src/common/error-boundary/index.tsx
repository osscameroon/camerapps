import { PureComponent, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
    message?: string;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends PureComponent<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.debug("Uncaught error:", error, errorInfo, this.props.message);
    }

    public render() {
        return this.props.children;
    }
}

export default ErrorBoundary;