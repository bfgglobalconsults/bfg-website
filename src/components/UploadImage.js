"use client";
import React, { useState } from "react";
import { CldImage, CldUploadButton } from "next-cloudinary";

const UploadImage = ({onChange}) => {
  const [imageId, setImageId] = useState("");
  return (
    <>
      <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Upload Cover Image
      </p>
      <CldUploadButton
        onSuccess={(result) => {
          setImageId(result.info.public_id);
          {console.log("Image uploaded:", result.info);}
          if (onChange) onChange(result.info.url);
        }}
        uploadPreset="blog-image"
      />

      {imageId && (
        <CldImage
          width="500"
          height="500"
          src={imageId}
          sizes="100vw"
          alt="Blog Image"
        />
      )}
    </>
  );
};

export default UploadImage;
