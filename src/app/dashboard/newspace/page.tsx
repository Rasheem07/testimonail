"use client";
import NotificationsPage from "@/components/cards/NotificationsPage";
import Testimonail_page from "@/components/cards/testiomialPage";
import ThankYouPage from "@/components/chatbot/thankYouPage";
import ExtraSettingsForm from "@/components/forms/ExtraSettingsForm";
import NewSpaceform from "@/components/forms/newSpaceform";
import ThankyouPageForm from "@/components/forms/ThankyouPageForm";
import SpaceFormHeader from "@/components/headers/spaceFormHeader";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/ui/loader";
import FormContextProvider from "@/contexts/formContext";
import { toast } from "@/hooks/use-toast";
import { createSpace } from "@/actions/createSpace";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "react-query";
import { queryClient } from "@/contexts/reactqueryProvider";
import { FormData } from "@/lib/validations";

export default function Page() {
  const [page, setpage] = useState("basic");
  const [isLoading, setisLoading] = useState(false);
  const [message, setmessage] = useState<string | null>(null);
  const [error, seterror] = useState<string | null>(null);
  const router = useRouter();

  const {
    handleSubmit,
  } = useFormContext();


  const mutation = useMutation(createSpace, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("spaceData");
      toast({
        title: "Space created!",
        description: data.json?.message,
      });
      router.push("/dashboard");
    },
    onError: (error: any) => {
      toast({
        title: "Something went wrong!",
        description: error.error,
        variant: "destructive",
      });
      setisLoading(false);
    },
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    setisLoading(true);
    mutation.mutate(data);
  };

  return (
    <div className="w-full max-w-6xl bg-white shadow-xl h-full min-h-screen rounded-xl z-50 p-6 border border-white">
      <div className="md:grid md:grid-cols-5 md:gap-6 h-full">
        <div className="md:col-span-2 py-6 md:py-12">
          {page == "basic" ? (
            <Testimonail_page />
          ) : page == "thankyoupage" ? (
            <ThankYouPage />
          ) : page == "extrasettings" ? (
            <Testimonail_page />
          ) : page == "notifications" ? (
            <NotificationsPage />
          ) : null}
        </div>
        <div className="md:col-span-3 mt-5 md:mt-0 px-2.5 md:px-8 py-12">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <SpaceFormHeader value={page} setValue={setpage} />
              <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                {page == "basic" ? (
                  <NewSpaceform />
                ) : page == "thankyoupage" ? (
                  <ThankyouPageForm />
                ) : page == "extrasettings" ? (
                  <ExtraSettingsForm />
                ) : page == "notifications" ? (
                  <NotificationsPage />
                ) : null}
                <Button
                  size={"lg"}
                  className="mt-6 w-full bg-purple-600"
                  type="submit"
                  onClick={() => console.log("fuck you it works")}
                >
                  Create a new space
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
