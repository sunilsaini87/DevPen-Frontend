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
import { handleError } from "@/utils/handleError";
import { useSignupMutation } from "@/redux/slices/api";
import { useDispatch } from "react-redux";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/appSlice";

const formSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function handleSignup(values: z.infer<typeof formSchema>) {
    try {
      const response = await signup(values).unwrap();
      dispatch(updateCurrentUser(response));
      dispatch(updateIsLoggedIn(true));
      navigate("/");
    } catch (error) {
      handleError(error);
    }
  }
  return (
    <div className="signup-container grid-bg w-full h-[calc(100vh-60px)] flex justify-center items-center flex-col gap-3 px-4 text-center ">
      <div className="form-container bg-zinc-800 border border-zinc-900 py-8 px-6 flex flex-col gap-8 w-full max-w-md rounded-lg shadow-lg">
        <div>
          <h1 className="font-mono text-3xl md:text-4xl font-bold  text-white text-center">SignUp</h1>
          <p className="font-mono text-xs md:text-sm text-gray-400 mt-2">
            SignUp Here
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSignup)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Username"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="email"
                      placeholder="Email"
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
              Signup
            </Button>
          </form>
        </Form>
        <small className="text-xs md:text-sm font-mono text-gray-400 mt-4">
          Already have an account?{" "}
          <Link className="text-sky-900 hover:underline" to="/login">
            Login
          </Link>
          
        </small>
      </div>
    </div>
  );
}
