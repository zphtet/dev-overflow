"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Editor } from "@tinymce/tinymce-react";
import { useTheme } from "next-themes";
import ParseHtml from "../../components/parse-html";
const formSchema = z.object({
  answer: z.string().min(100, { message: "must be 100 chars or more" }),
});

const AnswerForm = () => {
  const { theme } = useTheme();

  const [posting, setPosting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answer: "",
    },
  });
  const editorRef = useRef(null);
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Editor
                  apiKey="nrhs7e2w9iyjoxp4hvqzxewfcgk76gy8299j834brpi0fptr"
                  onInit={(evt, editor) => {
                    // @ts-ignore
                    return (editorRef.current = editor);
                  }}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue=""
                  init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                      "codesample",
                      "preview",
                    ],
                    skin: theme === "dark" ? "oxide-dark" : "oxide",
                    content_css: theme === "dark" ? "dark" : "light",
                    toolbar:
                      "undo redo | blocks | " +
                      "codesample bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | preview | help",
                    // content_style:
                    //   "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                  // {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button
            disabled={posting}
            variant={"default"}
            className="main-gradient-bg "
          >
            {posting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            post answer
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default AnswerForm;
