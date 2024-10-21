"use client";
import { useEffect, useState } from "react";

export const InputFile = ({
  label,
  value,
  ...rest
}: {
  label: string;
  value: File | null;
}) => {
  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (value) {
      const objectUrl = URL.createObjectURL(value);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview("");
    }
  }, [value]);

  return (
    <div>
      <label className="mb-2 text-sm text-gameRanks_primary ">
        {label}
        <input
          className="w-full text-sm mb-2 rounded-md cursor-pointer bg-default-100 focus:outline-none text-default-400 px-2 py-2"
          type="file"
          {...rest}
        />
        {preview && (
          <div className="flex justify-center w-full bg-default-200 py-2 rounded-md">
            <img
              src={preview}
              className="w-[120px] h-[120px] rounded-full object-cover object-center border-2 border-gameRanks_secondary"
              alt="to upload"
            />
          </div>
        )}
      </label>
    </div>
  );
};
