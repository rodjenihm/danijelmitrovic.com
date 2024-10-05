import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        404
      </h1>
      <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
        Oops! Page not found
      </p>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild variant="outline">
        <Link href="/" className="flex items-center space-x-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Safety</span>
        </Link>
      </Button>
    </div>
  );
}
