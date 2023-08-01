import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ? Local Imports
import JoiningIllu from "../assets/images/joining_illu.png";
import ProfileImg from "../assets/images/profile_img.png";

// ? Chakra Imports
import { Flex, Box, Text } from "@chakra-ui/react";

const Joining = ({ id = Math.random(), name = "Craftzmen" }) => {
  const surveyer = {
    id: id.toLocaleString(),
    name: name.toLocaleString(),
  };
  console.log(surveyer);
  return (
    <motion.div
      initial={{ y: "200px", transition: { delay: 0.3 } }}
      animate={{ y: "0px", }}
      className="w-full md:flex md:justify-center md:items-center p-0 box-border dark:bg-zinc-900 xl:mt-16"
    >
      <Flex
        direction={{ base: "column", xl: "row" }}
        gap={{ base: "10", md: "14", lg: "20" }}
        mx={{ base: "6", md: "10" }}
        mt={{ base: "20" }}
      >
        <Flex direction={"column"} gap={{ base: "5", md: "7" }} maxW={"md"}>
          <Flex direction={"column"} gap={"3"}>
            <Text
              fontSize={{ base: "lg", xl: "3xl" }}
              className="dark:text-zinc-300"
            >
              Unlock limitless possibilities by joining our vibrant network of{" "}
              <span className="text-zinc-500 font-extrabold">Tech Stack</span>.
            </Text>
            <Text
              fontSize={{ base: "sm", xl: "md" }}
              className="text-zinc-500 dark:text-zinc-500"
            >
              Start using glide for asynchronous daily tech learning.
            </Text>
          </Flex>
          <img src={JoiningIllu} alt="Joining" className=" w-28 h-28" />
          <Flex align={"center"} gap={"3"}>
            <img
              src={ProfileImg}
              alt="profile"
              className="w-9 h-9 rounded-full"
            />
            <Flex direction={"column"} fontSize={"xs"}>
              <p className="text-zinc-500">invited by</p>
              <Text fontWeight={"semibold"} className="dark:text-zinc-300">
                {" "}
                {surveyer.name}{" "}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <form className="text-sm md:w-[32rem] flex flex-col gap-y-2.5">
          <Flex direction={{ base: "column", lg: "row" }} gap={"4"}>
            <div className="space-y-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                className="w-full bg-zinc-100/50 rounded-lg py-3.5 px-5 focus:outline-0 dark:bg-zinc-800/50 dark:placeholder-zinc-500"
                required={true}
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="i.e. bobby"
                className="w-full bg-zinc-100/50  rounded-lg py-3.5 px-5 focus:outline-0 mb-4 lg:mb-0 dark:bg-zinc-800/50 dark:placeholder-zinc-500"
              />
            </div>
          </Flex>
          <div className="space-y-1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="user@glide.com"
              className="w-full bg-zinc-100/50  rounded-lg py-3.5 px-5 focus:outline-0 mb-4 dark:bg-zinc-800/50 dark:placeholder-zinc-500"
              required={true}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="passowrd">Password</label>
            <input
              type="password"
              id="password"
              placeholder="•••••••••••"
              className="w-full bg-zinc-100/50  rounded-lg py-3.5 px-5 focus:outline-0 mb-7 dark:bg-zinc-800/50 dark:placeholder-zinc-500"
              required={true}
            />
          </div>
          <div className="mt-3">
            <Box className="flex items-center text-xs gap-x-3">
              <input
                type="checkbox"
                id="remember_me"
                className="checkbox bg-gray-200 dark:bg-zinc-800/50 border-0 rounded checkbox-sm focus:outline-0"
                required={true}
              />
              <label
                htmlFor="remember_me"
                className="text-zinc-500 cursor-pointer"
              >
                Remember me
              </label>
            </Box>
            <Box className="flex items-center text-xs gap-x-3 mt-2.5">
              <input
                type="checkbox"
                id="terms_&_conditions"
                className="checkbox bg-gray-200 dark:bg-zinc-800/50 border-0 rounded checkbox-sm focus:outline-0"
                required={true}
              />
              <label
                htmlFor="terms_&_conditions"
                className="text-zinc-500 cursor-pointer"
              >
                I agree to the{" "}
                <span className="text-black font-medium dark:text-zinc-400">
                  Terms & Conditions
                </span>{" "}
                of use
              </label>
            </Box>
          </div>
          <Box
            mt={{ base: "8", lg: "10" }}
            display={"flex"}
            justifyContent={"end"}
            alignItems={"end"}
          >
            <Link
              disabled
              className="cursor-not-allowed text-zinc-400 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-600 py-3 rounded-full text-base font-semibold px-16"
            >
              Join
            </Link>
          </Box>
        </form>
      </Flex>
    </motion.div>
  );
};

export default Joining;
