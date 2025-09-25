import { Search, Plus, CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto bg-gray-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
            <CheckSquare className="w-8 h-8 text-gray-600" />
          </div>
          <CardTitle className="text-xl">Задача не найдена</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            Запрашиваемая задача не существует или была удалена из системы.
          </p>

          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link href="/tasks">
                <Search className="w-4 h-4 mr-2" />
                Все задачи
              </Link>
            </Button>

            <Button asChild variant="outline" className="w-full">
              <Link href="/tasks/new">
                <Plus className="w-4 h-4 mr-2" />
                Создать задачу
              </Link>
            </Button>

            <Button asChild variant="ghost" className="w-full">
              <Link href="/">
                Вернуться на главную
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}