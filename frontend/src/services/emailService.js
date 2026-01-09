import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'service_w04rpxb';
const TEMPLATE_ID = 'template_pb4wgbk';
const PUBLIC_KEY = 'EjHFp4_9JY3oak96z';

export const sendEmail = async (formData) => {
  try {
    // Initialize EmailJS right before sending
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error('EmailJS configuration missing');
    }
    
    emailjs.init(PUBLIC_KEY);
    
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString()
      }
    );
    return { success: true, result };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error: error.message || 'Failed to send email' };
  }
};