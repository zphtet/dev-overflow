import Image from "next/image";

const JobCompoment = () => {
  return (
    <div className="bg-white p-5 rounded-md flex sm:flex-row flex-col gap-5">
      <div className="w-[60px] p-3 h-[60px] bg-gray-200 rounded-md flex items-center justify-center relative">
        <Image
          src={"/assets/images/logo-light.svg"}
          fill
          alt="job cover imag"
          className=" p-2 object-contain "
        />
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex sm:flex-row flex-col gap-2  sm:items-center sm:justify-between w-full">
          <p
            className="font-bold text-xl
          "
          >
            Warehouse Team Member at Amazon
          </p>
          <div className="flex w-max items-center gap-2 px-2 py-0.5 rounded-3xl bg-gray-100">
            <Image
              src={"/assets/icons/eye.svg"}
              alt="country flag"
              width={20}
              height={10}
            />
            <p className="text-sm">Amsterdam, NH , NL</p>
          </div>
        </div>
        <p className="line-clamp-2">
          Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet
          cons adipisicing elit. Earum quasi totam et distinctio cupiditate
          eligendi maiores consequuntur excepturi officiis dignissimos!
        </p>
        <div className="pt-5 flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <div className="flex gap-1 items-center text-blue-500 text-sm">
              <Image
                src={"/assets/icons/clock-2.svg"}
                alt="clock image"
                width={15}
                height={15}
              />
              <p>FULL TIME</p>
            </div>
            <div className="flex gap-1 items-center text-blue-500 text-sm">
              <Image
                src={"/assets/icons/currency-dollar-circle.svg"}
                alt="clock image"
                width={15}
                height={15}
              />
              <p>Not Closed</p>
            </div>
          </div>
          <a
            href="https:www.google.com"
            target="_blank"
            className="flex gap-2 "
          >
            <p className="text-primary-color text-sm font-bold">View Job</p>
            <Image
              src={"/assets/icons/arrow-up-right.svg"}
              width={20}
              height={20}
              alt="external"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCompoment;
