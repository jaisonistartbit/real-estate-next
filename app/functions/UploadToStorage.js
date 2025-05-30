"use client";

import { supabase } from "@/lib/supabase";

export const uploadToStorage = async (file, folder = "properties") => {
  const fileExt = file?.name?.split(".")?.pop();
  const fileName = `${folder}/${Date.now()}-${Math.random()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("property-attachments")
    .upload(fileName, file);

  if (error) {
    throw new Error("Upload failed: " + error.message);
  }

  const { data: publicUrlData } = supabase.storage
    .from("property-attachments")
    .getPublicUrl(fileName);

  return publicUrlData.publicUrl;
};
