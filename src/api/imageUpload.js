export const uploadImageToImgBB = async (imageFile) => {
  const apiKey = "f1d45929a0ede87b282a036c240c1450";
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      return data.data.url;
    } else {
      throw new Error("Image upload failed");
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};
