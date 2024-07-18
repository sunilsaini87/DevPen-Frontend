import "./pageStyles/grid.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/slices/api";
import { handleError } from "@/utils/handleError";
import { useDispatch } from "react-redux";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/appSlice";

const formSchema = z.object({
  userId: z.string(),
  password: z.string(),
});

export default function Login() {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  async function handleLogin(values: z.infer<typeof formSchema>) {
    try {
      const response = await login(values).unwrap();
      dispatch(updateCurrentUser(response));
      dispatch(updateIsLoggedIn(true));
      navigate("/");
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <div className="__login grid-bg w-full h-[calc(100vh-60px)] flex justify-center items-center flex-col gap-6 px-4 text-center">
      <div className="__form_container bg-zinc-800 border border-gray-700 py-8 px-6 flex flex-col gap-5 w-full max-w-md rounded-lg shadow-lg">
        <div>
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-white text-center">Login</h1>
          <p className="font-mono text-xs md:text-sm text-gray-400 mt-2">Welcome back</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      required
                      disabled={isLoading}
                      placeholder="Username or Email"
                      className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      required
                      disabled={isLoading}
                      type="password"
                      placeholder="Password"
                      className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              loading={isLoading}
              className="w-full p-2 mt-4 bg-sky-950 hover:bg-sky-900 text-white font-bold rounded"
              type="submit"
            >
              Login
            </Button>
          </form>
        </Form>
        <small className="text-xs md:text-sm font-mono text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link className="text-sky-800 hover:underline" to="/signup">
            Signup
          </Link>
          
        </small>
      </div>
    </div>
  );
}
