import { APICall } from ".";

export const ax_contactForm = async (payload) => {
  try {
    const res = await APICall.post("/contact", payload);

    console.log("res - " + JSON.stringify(res.data));

    if (res.status === 200 || res.status === 201) {
      return res.data;
    }
    return {
      success: false,
      message: res.data.message || "Failed to send message.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};
