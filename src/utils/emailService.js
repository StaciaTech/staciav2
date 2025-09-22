// Email Service Utility
// This is a placeholder implementation. In a real application, you would integrate with
// services like EmailJS, SendGrid, Nodemailer, or your backend API.

export const sendProductInquiry = async (inquiryData) => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, you would:
    // 1. Send data to your backend API
    // 2. Backend would send email using services like SendGrid, Nodemailer, etc.
    // 3. Return success/error response
    
    console.log('Product Inquiry Data:', inquiryData);
    
    // Mock email content
    const emailContent = {
      to: 'admin@staciacorp.com', // Admin email
      subject: `New Product Inquiry: ${inquiryData.productName}`,
      html: generateEmailHTML(inquiryData),
      text: generateEmailText(inquiryData)
    };
    
    console.log('Email would be sent:', emailContent);
    
    // Simulate success response
    return {
      success: true,
      message: 'Inquiry submitted successfully',
      inquiryId: `INQ-${Date.now()}`
    };
    
  } catch (error) {
    console.error('Error sending product inquiry:', error);
    return {
      success: false,
      message: 'Failed to submit inquiry. Please try again.',
      error: error.message
    };
  }
};

// Generate HTML email content
const generateEmailHTML = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Product Inquiry</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2c3e50; }
        .value { margin-top: 5px; padding: 8px; background: white; border-radius: 5px; border-left: 4px solid #667eea; }
        .product-info { background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🚀 New Product Inquiry Received</h2>
          <p>Someone is interested in learning more about our products!</p>
        </div>
        
        <div class="content">
          <div class="product-info">
            <h3>📦 Product Information</h3>
            <div class="field">
              <div class="label">Product Name:</div>
              <div class="value">${data.productName}</div>
            </div>
            <div class="field">
              <div class="label">Category:</div>
              <div class="value">${data.productCategory}</div>
            </div>
          </div>
          
          <h3>👤 Contact Information</h3>
          <div class="field">
            <div class="label">Full Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          ${data.company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${data.company}</div>
          </div>
          ` : ''}
          ${data.position ? `
          <div class="field">
            <div class="label">Position:</div>
            <div class="value">${data.position}</div>
          </div>
          ` : ''}
          
          <h3>📋 Inquiry Details</h3>
          <div class="field">
            <div class="label">Inquiry Type:</div>
            <div class="value">${getInquiryTypeLabel(data.inquiryType)}</div>
          </div>
          ${data.productInterest ? `
          <div class="field">
            <div class="label">Product Interest:</div>
            <div class="value">${data.productInterest}</div>
          </div>
          ` : ''}
          ${data.budget ? `
          <div class="field">
            <div class="label">Budget Range:</div>
            <div class="value">${getBudgetLabel(data.budget)}</div>
          </div>
          ` : ''}
          ${data.timeline ? `
          <div class="field">
            <div class="label">Project Timeline:</div>
            <div class="value">${getTimelineLabel(data.timeline)}</div>
          </div>
          ` : ''}
          ${data.quantity ? `
          <div class="field">
            <div class="label">Estimated Quantity:</div>
            <div class="value">${data.quantity}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message}</div>
          </div>
          
          ${data.additionalInfo ? `
          <div class="field">
            <div class="label">Additional Information:</div>
            <div class="value">${data.additionalInfo}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">Inquiry Date:</div>
            <div class="value">${new Date(data.inquiryDate).toLocaleString()}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This inquiry was submitted through the Stacia Corp website.</p>
          <p>Please respond to the customer within 24 hours for best results.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Generate plain text email content
const generateEmailText = (data) => {
  return `
NEW PRODUCT INQUIRY RECEIVED
==============================

Product Information:
- Product Name: ${data.productName}
- Category: ${data.productCategory}

Contact Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
${data.company ? `- Company: ${data.company}` : ''}
${data.position ? `- Position: ${data.position}` : ''}

Inquiry Details:
- Type: ${getInquiryTypeLabel(data.inquiryType)}
${data.productInterest ? `- Interest: ${data.productInterest}` : ''}
${data.budget ? `- Budget: ${getBudgetLabel(data.budget)}` : ''}
${data.timeline ? `- Timeline: ${getTimelineLabel(data.timeline)}` : ''}
${data.quantity ? `- Quantity: ${data.quantity}` : ''}

Message:
${data.message}

${data.additionalInfo ? `Additional Info: ${data.additionalInfo}` : ''}

Inquiry Date: ${new Date(data.inquiryDate).toLocaleString()}

---
This inquiry was submitted through the Stacia Corp website.
Please respond within 24 hours for best results.
  `;
};

// Helper functions for labels
const getInquiryTypeLabel = (type) => {
  const labels = {
    'general': 'General Information',
    'pricing': 'Pricing Inquiry',
    'demo': 'Request Demo',
    'customization': 'Customization Request',
    'partnership': 'Partnership Inquiry',
    'support': 'Technical Support'
  };
  return labels[type] || type;
};

const getBudgetLabel = (budget) => {
  const labels = {
    'under-10k': 'Under $10,000',
    '10k-50k': '$10,000 - $50,000',
    '50k-100k': '$50,000 - $100,000',
    '100k-500k': '$100,000 - $500,000',
    'over-500k': 'Over $500,000',
    'discuss': 'Prefer to Discuss'
  };
  return labels[budget] || budget;
};

const getTimelineLabel = (timeline) => {
  const labels = {
    'immediate': 'Immediate (Within 1 month)',
    'short': 'Short-term (1-3 months)',
    'medium': 'Medium-term (3-6 months)',
    'long': 'Long-term (6+ months)',
    'exploring': 'Just Exploring'
  };
  return labels[timeline] || timeline;
};

// Example of how to integrate with EmailJS (uncomment and configure)
/*
import emailjs from '@emailjs/browser';

export const sendProductInquiryWithEmailJS = async (inquiryData) => {
  try {
    const templateParams = {
      to_email: 'admin@staciacorp.com',
      product_name: inquiryData.productName,
      customer_name: inquiryData.name,
      customer_email: inquiryData.email,
      customer_phone: inquiryData.phone,
      inquiry_type: getInquiryTypeLabel(inquiryData.inquiryType),
      message: inquiryData.message,
      inquiry_date: new Date(inquiryData.inquiryDate).toLocaleString()
    };

    const response = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_PUBLIC_KEY'
    );

    return {
      success: true,
      message: 'Inquiry submitted successfully',
      response: response
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      message: 'Failed to submit inquiry',
      error: error.message
    };
  }
};
*/

// Client Inquiry Email Service
export const sendClientInquiry = async (inquiryData) => {
  try {
    // Simulate API call - replace with actual email service
    const response = await fetch('/api/send-client-inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...inquiryData,
        inquiryDate: new Date().toISOString()
      })
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Inquiry submitted successfully',
        inquiryId: `CLIENT-${Date.now()}`
      };
    } else {
      return {
        success: false,
        message: 'Failed to submit inquiry. Please try again.',
        error: 'Server error'
      };
    }
  } catch (error) {
    console.error('Error sending client inquiry:', error);
    return {
      success: false,
      message: 'Failed to submit inquiry. Please try again.',
      error: error.message
    };
  }
};

// Generate HTML email content for client inquiry
export const generateClientInquiryHTML = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Client Inquiry</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2c3e50; }
        .value { margin-top: 5px; padding: 8px; background: white; border-radius: 5px; border-left: 4px solid #667eea; }
        .project-info { background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🚀 New Client Inquiry Received</h2>
          <p>A potential client is interested in working with us!</p>
        </div>
        
        <div class="content">
          <h3>👤 Contact Information</h3>
          <div class="field">
            <div class="label">Full Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          ${data.company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${data.company}</div>
          </div>
          ` : ''}
          ${data.position ? `
          <div class="field">
            <div class="label">Position:</div>
            <div class="value">${data.position}</div>
          </div>
          ` : ''}
          
          <div class="project-info">
            <h3>📋 Project Information</h3>
            <div class="field">
              <div class="label">Project Type:</div>
              <div class="value">${getProjectTypeLabel(data.projectType)}</div>
            </div>
            ${data.budget ? `
            <div class="field">
              <div class="label">Budget Range:</div>
              <div class="value">${getBudgetLabel(data.budget)}</div>
            </div>
            ` : ''}
            ${data.timeline ? `
            <div class="field">
              <div class="label">Project Timeline:</div>
              <div class="value">${getTimelineLabel(data.timeline)}</div>
            </div>
            ` : ''}
          </div>
          
          <div class="field">
            <div class="label">Project Description:</div>
            <div class="value">${data.projectDescription}</div>
          </div>
          
          ${data.currentChallenges ? `
          <div class="field">
            <div class="label">Current Challenges:</div>
            <div class="value">${data.currentChallenges}</div>
          </div>
          ` : ''}
          
          ${data.expectedOutcomes ? `
          <div class="field">
            <div class="label">Expected Outcomes:</div>
            <div class="value">${data.expectedOutcomes}</div>
          </div>
          ` : ''}
          
          ${data.additionalInfo ? `
          <div class="field">
            <div class="label">Additional Information:</div>
            <div class="value">${data.additionalInfo}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">Inquiry Date:</div>
            <div class="value">${new Date(data.inquiryDate).toLocaleString()}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This inquiry was submitted through the Stacia Corp Client Visit page.</p>
          <p>Please respond to the client within 24 hours for best results.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Helper functions for client inquiry labels
const getProjectTypeLabel = (type) => {
  const labels = {
    'web-development': 'Web Development',
    'mobile-app': 'Mobile App Development',
    'e-commerce': 'E-commerce Solution',
    'ai-ml': 'AI/ML Solutions',
    'iot': 'IoT Development',
    'blockchain': 'Blockchain Development',
    'consulting': 'Technical Consulting',
    'other': 'Other'
  };
  return labels[type] || type;
};

// Example of how to integrate with backend API
/*
export const sendProductInquiryToAPI = async (inquiryData) => {
  try {
    const response = await fetch('/api/product-inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API error:', error);
    return {
      success: false,
      message: 'Failed to submit inquiry',
      error: error.message
    };
  }
};
*/
