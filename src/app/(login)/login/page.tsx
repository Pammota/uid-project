import Button from "@/components/shared/Button";
import { Input } from "@/components/shared/Input";


export default function Page () {

    return (
        <main className="flex min-h-screen w-full gap-4 bg-gray-200 items-center justify-center flex-col p-4">
          <div className="p-6 rounded-lg bg-white flex flex-col gap-4">
            <span className="font-medium text-4xl text-center">Login</span>
            <Input className="bg-gray-200" label="Username"></Input>
            <Input className="bg-gray-200" label="Password" type="password"></Input>
            <Button>Login</Button>
          </div>
        </main>
    )

}