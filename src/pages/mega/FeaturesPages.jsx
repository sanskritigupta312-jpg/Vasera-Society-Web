import MegaPageTemplate from '../../components/elements/MegaPageTemplate';
import { ContentBlock } from '../../components/elements/ContentBlock';

export const AutomatedBilling = () => (
  <MegaPageTemplate 
    category="Core Tools" icon="💳" title="Automated Billing" 
    subtitle="Generate bills, send reminders, and collect payments automatically with zero hassle."
    image="/feat1.jpg"
  >
    <ContentBlock
      title="Never chase payments again."
      text="Vasera automatically calculates and generates maintenance bills for all units based on area, flat type, or fixed amounts. Residents receive instant WhatsApp, SMS, and Email reminders, drastically improving on-time collections."
      emoji="🧾"
      points={[
        "One-click bulk invoice generation across 1000s of units.",
        "Integrated payment gateway allowing UPI, Net Banking, and Credit Cards.",
        "Auto-reconciliation of accounts within 24 hours.",
        "Automated late payment penalty calculations."
      ]}
    />
    <ContentBlock
      title="Real-time Financial Dashboards"
      text="Stop relying on outdated spreadsheets. Get a live view of your society's financial health, track outstanding dues, and generate comprehensive ledgers in seconds."
      emoji="📈"
      reversed
      points={[
        "Instant overview of total collected vs outstanding amounts.",
        "Downloadable receipt generation for residents.",
        "Export reports directly to Tally or Excel."
      ]}
    />
  </MegaPageTemplate>
);

export const VisitorManagement = () => (
  <MegaPageTemplate 
    category="Core Tools" icon="🚪" title="Visitor Management" 
    subtitle="Secure your gate with OTP-based approvals and real-time visitor logs."
    image="/feat2.jpg"
  >
    <ContentBlock
      title="100% Gate Visibility"
      text="Replace paper registers with a robust digital system. Guards can capture photos, vehicle numbers, and verify phone numbers with OTP before allowing entry. Residents get instant push notifications."
      emoji="🛡️"
      points={[
        "OTP and QR code based quick entry for guests.",
        "Pre-approve expected visitors to bypass gate delays.",
        "Dedicated workflows for daily staff (maids, drivers, cooks).",
        "Block unwanted visitors universally."
      ]}
    />
    <ContentBlock
      title="Delivery & Cab Integrations"
      text="Integrate seamlessly with Swiggy, Zomato, Amazon, Uber, and Ola. Guards can verify delivery partners instantly, keeping your premises safe from unauthorized access."
      emoji="🛵"
      reversed
      points={[
        "Auto-fetching of delivery partner details.",
        "Resident approval required for doorstep deliveries.",
        "Leave-at-gate options for secure package handling."
      ]}
    />
  </MegaPageTemplate>
);

export const ComplaintRedressal = () => (
  <MegaPageTemplate 
    category="Core Tools" icon="🔧" title="Complaint Redressal" 
    subtitle="Let residents raise tickets in one tap. Assign to staff and track status effortlessly."
    image="/feat3.jpg"
  >
    <ContentBlock
      title="Resolve issues faster."
      text="Residents can snap a photo, add a description, and raise a ticket directly from the Vasera app. The system automatically routes the ticket to the correct staff member (plumber, electrician, etc.)."
      emoji="📱"
      points={[
        "Categorized ticketing system for streamlined routing.",
        "SLA tracking to ensure timely resolution.",
        "Staff can update status and close tickets on their mobile app.",
        "Residents can rate the service after ticket closure."
      ]}
    />
    <ContentBlock
      title="Committee Oversight Dashboard"
      text="Committee members get a bird's eye view of all open, in-progress, and resolved complaints. Identify bottlenecks in maintenance staff performance instantly."
      emoji="📊"
      reversed
      points={[
        "Filter tickets by category, priority, or assigned staff.",
        "Generate monthly maintenance performance reports.",
        "Identify recurring infrastructure issues in the society."
      ]}
    />
  </MegaPageTemplate>
);

export const FinancialReports = () => (
  <MegaPageTemplate 
    category="Core Tools" icon="📊" title="Financial Reports" 
    subtitle="Total transparency with one-click income, expense, and audit trail reports."
    image="/feat4.jpg"
  >
    <ContentBlock
      title="Audit-ready at all times."
      text="Say goodbye to year-end accounting chaos. Vasera maintains a meticulous ledger of every single transaction, categorizing expenses and income accurately."
      emoji="📒"
      points={[
        "Generate Trial Balance, Income & Expenditure, and Balance Sheets.",
        "Track vendor payments and manage GST compliance.",
        "Secure, role-based access for society accountants.",
        "Full audit trail log tracking who modified what."
      ]}
    />
  </MegaPageTemplate>
);

export const SmartNotices = () => (
  <MegaPageTemplate 
    category="Engagement" icon="📢" title="Smart Notices" 
    subtitle="Publish digital announcements to every resident's phone instantly—with read receipts."
    image="/feat5.jpg"
  >
    <ContentBlock
      title="Cut the paper trail."
      text="Stop pinning paper notices to lobby bulletin boards. Create rich-text announcements, attach PDF documents, and broadcast them directly to residents' smartphones."
      emoji="📝"
      points={[
        "Track read receipts to see exactly who has seen the notice.",
        "Target specific blocks, towers, or flat types.",
        "Allow or disable resident comments on specific notices.",
        "Schedule notices to be published at a specific date and time."
      ]}
    />
  </MegaPageTemplate>
);

export const FacilityBooking = () => (
  <MegaPageTemplate 
    category="Engagement" icon="🏊" title="Facility Booking" 
    subtitle="Seamless bookings for clubhouses, pools, and courts. No clashes or confusion."
    image="/feat6.jpg"
  >
    <ContentBlock
      title="Fair and transparent bookings."
      text="Residents can check real-time availability of society amenities and book slots instantly. The system prevents double-booking and handles payment processing if amenities are chargeable."
      emoji="🎾"
      points={[
        "Set custom rules (e.g., max 2 bookings per week per flat).",
        "Configure paid vs free facilities.",
        "Auto-generate booking confirmation passes for the guard.",
        "Block out dates for society-wide maintenance."
      ]}
    />
  </MegaPageTemplate>
);

export const EmergencyAlerts = () => (
  <MegaPageTemplate 
    category="Engagement" icon="🚨" title="Emergency Alerts" 
    subtitle="Broadcast urgent push notifications during emergencies in under 5 seconds."
    image="/feat7.jpg"
  >
    <ContentBlock
      title="Safety when it matters most."
      text="In case of fire, medical emergencies, or security breaches, residents or guards can trigger a society-wide alarm. It overrides silent modes on smartphones to ensure everyone is notified."
      emoji="🔔"
      points={[
        "One-tap SOS button in the resident app.",
        "Triggers loud alarms on security guard devices.",
        "Auto-notifies committee members and designated emergency contacts.",
        "Logs all emergency events for post-incident reviews."
      ]}
    />
  </MegaPageTemplate>
);

export const MeetingMinutes = () => (
  <MegaPageTemplate 
    category="Engagement" icon="📋" title="Meeting Minutes" 
    subtitle="Digitally record and archive AGM and committee meeting minutes for full compliance."
    image="/feat8.jpg"
  >
    <ContentBlock
      title="Digital Governance"
      text="Keep an immutable record of all society decisions. Draft, collaborate, and finalize meeting minutes digitally. Once published, they are securely archived and accessible to authorized residents."
      emoji="🤝"
      points={[
        "Built-in text editor for formatting meeting minutes.",
        "Capture attendance and digital signatures of committee members.",
        "Tag action items and assign them to specific people.",
        "Searchable archive of past meetings spanning years."
      ]}
    />
  </MegaPageTemplate>
);
