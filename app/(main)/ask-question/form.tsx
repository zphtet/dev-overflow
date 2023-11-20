"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const formSchema = z.object({
  title: z.string().min(5, { message: "must be 5 chars or more" }),
  explaination: z.string().min(100, { message: "must be 100 chars or more" }),
  tags: z.string().min(5, { message: "must be 5 chars or more" }),
});

const AskQuestionFrom = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Question Title <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="your title ..."
                  {...field}
                  className="focus:ring-none focus-visible:outline-none focus-visible:ring-0 outline-none py-6 focus-visible:ring-transparent"
                />
              </FormControl>
              <span className="text-[12px] text-light-500">
                Be specific and imagine you’re asking a question to another
                person.
              </span>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explaination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Detailed explanation of your problem?{" "}
                <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Editor
                  apiKey="nrhs7e2w9iyjoxp4hvqzxewfcgk76gy8299j834brpi0fptr"
                  //   onInit={(evt, editor) => (editorRef.current = editor)}
                  //   initialValue="<p>write the detail explaination ...</p>"

                  init={{
                    height: 350,
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
                    toolbar:
                      "undo redo | blocks | " +
                      "codesample bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | preview | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                  {...field}
                />
              </FormControl>
              <span className="text-[12px] text-light-500">
                Introduce the problem and expand on what you put in the title.
                Minimum 100 characters.
              </span>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Tags <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="tags "
                  {...field}
                  className="focus:ring-none focus-visible:outline-none focus-visible:ring-0 outline-none py-6 focus-visible:ring-transparent"
                />
              </FormControl>
              <span className="text-[12px] text-light-500">
                Add up to 3 tags to describe what your question is about. You
                need to press enter to add a tag.
              </span>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button variant={"default"} className="main-gradient-bg ">
            Ask a Question
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default AskQuestionFrom;
