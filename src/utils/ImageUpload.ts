const cloudName = "dervoi2c1";
const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

export const uploadFile = async (file: string | File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "images_preset");

    const response = await fetch(api, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload the image.");
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.log("Error uploading file:", error);
    throw new Error("Failed to upload the image.");
  }
};
