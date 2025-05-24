import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

export function generateAIResponse(query: string): string {
  const responses: { [key: string]: string } = {
    refund_policy: `Here are the exceptions to our 30 day refund policy:

1. Product has defects or is damaged upon arrival
2. Customer is dissatisfied with our service
3. The order was a mistake or made accidentally
4. Product doesn't match the description
5. Size or fit issues with clothing items

Please note that all exceptions are subject to approval from a team leader.

Would you like me to:
1. Start the refund process
2. Explain the full policy
3. Connect you with a team leader`,

    exchange_process: `Here's how to process an exchange:

1. Verify the order details
2. Check if item is eligible (within 30 days)
3. Confirm new item is in stock
4. Generate return label
5. Process exchange in system

Required information:
✓ Original order number
✓ Item SKU
✓ Reason for exchange
✓ New item preference

Would you like me to help with any of these steps?`,

    damaged_items: `Our policy for damaged items:

🔍 Documentation needed:
• Photos of damage
• Order number
• Date received

📋 Process:
1. Immediate refund issued
2. Free return shipping
3. Replacement sent if available
4. 10% discount on next purchase

Would you like me to start this process?`,

    shipping_times: `Current shipping timeframes:

🚚 Domestic:
• Standard: 3-5 business days
• Express: 1-2 business days
• Same-day: Available in select cities

✈️ International:
• Standard: 7-14 business days
• Express: 3-5 business days
• Priority: 2-3 business days

Need help tracking an order?`,

    default: `I'm here to help! Here are some key policies I can explain:

• Refunds and returns
• Exchanges and warranties
• Shipping and delivery
• Product information
• Account management

What would you like to know more about?`
  };

  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('refund policy') || lowerQuery.includes('exception')) {
    return responses.refund_policy;
  } else if (lowerQuery.includes('exchange') || lowerQuery.includes('process')) {
    return responses.exchange_process;
  } else if (lowerQuery.includes('damage') || lowerQuery.includes('broken')) {
    return responses.damaged_items;
  } else if (lowerQuery.includes('shipping') || lowerQuery.includes('delivery')) {
    return responses.shipping_times;
  }
  
  return responses.default;
}

export function getRelevantSources(query: string): AISource[] {
  const sources = {
    greeting: [
      { id: '1', title: 'Getting Started Guide', icon: 'book', count: 5 },
      { id: '2', title: 'Common Questions', icon: 'help-circle' },
      { id: '3', title: 'Contact Support', icon: 'mail' },
    ],
    refund: [
      { id: '1', title: 'Refund Policy', icon: 'file-text', count: 12 },
      { id: '2', title: 'Return Process Guide', icon: 'package' },
      { id: '3', title: 'Special Cases & Exceptions', icon: 'gift' },
    ],
    shipping: [
      { id: '1', title: 'Shipping Methods', icon: 'truck', count: 8 },
      { id: '2', title: 'Delivery Estimates', icon: 'clock' },
      { id: '3', title: 'International Shipping', icon: 'globe' },
    ],
    product: [
      { id: '1', title: 'Product Catalog', icon: 'box', count: 15 },
      { id: '2', title: 'Usage Guidelines', icon: 'book' },
      { id: '3', title: 'Care Instructions', icon: 'heart' },
    ],
    account: [
      { id: '1', title: 'Account Settings', icon: 'user', count: 10 },
      { id: '2', title: 'Security Guide', icon: 'shield' },
      { id: '3', title: 'Privacy Policy', icon: 'lock' },
    ],
    help: [
      { id: '1', title: 'Help Center', icon: 'help-circle', count: 25 },
      { id: '2', title: 'FAQs', icon: 'file-text' },
      { id: '3', title: 'Support Channels', icon: 'mail' },
    ],
    default: [
      { id: '1', title: 'Help Center', icon: 'help-circle', count: 25 },
      { id: '2', title: 'FAQs', icon: 'file-text' },
      { id: '3', title: 'Contact Support', icon: 'mail' },
    ],
  };

  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('hi') || lowerQuery.includes('hello') || lowerQuery.includes('hey')) {
    return sources.greeting;
  } else if (lowerQuery.includes('refund') || lowerQuery.includes('return')) {
    return sources.refund;
  } else if (lowerQuery.includes('shipping') || lowerQuery.includes('delivery')) {
    return sources.shipping;
  } else if (lowerQuery.includes('product') || lowerQuery.includes('item')) {
    return sources.product;
  } else if (lowerQuery.includes('account') || lowerQuery.includes('profile')) {
    return sources.account;
  } else if (lowerQuery.includes('help') || lowerQuery.includes('support')) {
    return sources.help;
  }
  
  return sources.default;
}

export interface AISource {
  id: string;
  title: string;
  icon: string;
  count?: number;
}