import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "@/style.css";
import "@splidejs/splide/dist/css/splide.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 次のレンダーでフォールバックUIを表示するために状態を更新します。
    if (error) {
      return { hasError: true };
    }
  }

  componentDidCatch(error, errorInfo) {
    // エラーレポートサービスにエラーをログすることもできます。
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // カスタムフォールバックUIをレンダリングすることができます。
      return <h1>何かが間違ってしまいました。</h1>;
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  // useEffectが2回実行されるのでstrictMode回避
  // <React.StrictMode>
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ErrorBoundary>

  // </React.StrictMode>,
);
