'use client'

import { AlertCircle, RefreshCw, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto bg-red-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
            <Building className="w-6 h-6 text-red-600" />
          </div>
          <CardTitle className="text-xl">Ошибка загрузки недвижимости</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Что-то пошло не так</AlertTitle>
            <AlertDescription>
              {error.message || 'Произошла неожиданная ошибка при загрузке данных о недвижимости.'}
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Button
              onClick={reset}
              className="w-full"
              variant="default"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Попробовать снова
            </Button>

            <Button
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="w-full"
            >
              Вернуться на главную
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}