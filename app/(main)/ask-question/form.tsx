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
import { KeyboardEvent, KeyboardEventHandler, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ShieldCloseIcon, X } from "lucide-react";
const formSchema = z.object({
  title: z.string().min(5, { message: "must be 5 chars or more" }),
  explaination: z.string().min(100, { message: "must be 100 chars or more" }),
  tags: z.array(z.string().min(1).min(15)).min(1).max(3),
});

const AskQuestionFrom = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      explaination: "",
      tags: [],
    },
  });

  const editorRef = useRef(null);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const onChnageHandler = (e: KeyboardEvent<HTMLInputElement>, field: any) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      // alert("you are pressing on Tags Input");
      const tagInput = e.target as HTMLInputElement;
      const newTag = tagInput.value.trim();
      if (newTag === "") return;

      if (newTag.length > 15) {
        return form.setError("tags", {
          message: "tag must be at most 15 characters long",
          type: "required",
        });
      }
      if (!field.value.includes(newTag)) {
        form.setValue("tags", [...field.value, newTag]);
        tagInput.value = "";
        form.clearErrors("tags");
      } else {
        form.trigger();
      }
    }
  };

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
                  onInit={(evt, editor) => {
                    // @ts-ignore
                    return (editorRef.current = editor);
                  }}
                  initialValue=""
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
                    // content_style:
                    //   "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                  // {...field}
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
                <>
                  <Input
                    placeholder="Add tags... "
                    // {...field}
                    // {field.value.in}
                    onKeyDown={(e) => onChnageHandler(e, field)}
                    className="focus:ring-none focus-visible:outline-none focus-visible:ring-0 outline-none py-6 focus-visible:ring-transparent"
                  />
                  {field.value.length > 0 && (
                    <div className="flex items-center gap-3">
                      {field?.value?.map((tag) => {
                        return (
                          <div
                            key={tag}
                            className="px-4 py-1 flex items-center gap-3 rounded bg-light-700 text-light-400 dark:bg-dark-400 dark:text-white"
                          >
                            {tag}
                            <button
                              onClick={() => {
                                const filteredValues = field.value.filter(
                                  (tagItem) => tagItem !== tag
                                );
                                form.setValue("tags", [...filteredValues]);
                              }}
                            >
                              <X width={"16px"} height={"16px"} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
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
