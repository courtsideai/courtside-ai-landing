---
title: Data Processing Addendum
updated: September 29, 2026
---

# Data Processing Addendum

**Last updated: September 29, 2026**

This Data Processing Addendum ("**DPA**") forms part of the [Operator Terms](/legal/operator-terms) (the "**Agreement**") between Courtside AI Inc. ("**Courtside**") and the Operator. It sets out how Courtside handles personal information on the Operator's behalf. Terms defined in the Agreement have the same meaning here. If this DPA and the Agreement conflict about personal information, this DPA wins.

## 1. Roles

- **The Operator** decides why and how its Customer Data is used, and is responsible for it under applicable privacy law — including the *Personal Information Protection and Electronic Documents Act* (PIPEDA), Québec's *Act respecting the protection of personal information in the private sector*, Alberta's and British Columbia's *Personal Information Protection Acts*, and any U.S. state privacy laws that apply ("**Privacy Laws**").
- **Courtside** processes Customer Data **on the Operator's behalf, as its service provider**, to provide the Services.
- **Customer accounts.** Each Customer's Courtside account and shared profile (name, email, phone numbers, and optionally date of birth and addresses), sign-in, and account deletion are handled by Courtside as described in its Privacy Policy, because the same account is used at every facility on Courtside. The Operator's own records about the Customer — bookings, payments, waivers, notes, tags, messages and marketing consent — are Customer Data under this DPA.

## 2. Courtside's commitments

Courtside will:

1. **Follow instructions.** Process Customer Data only to provide, secure and support the Services, as documented in the Agreement and the Operator's use and configuration of the Services, and as required by law (in which case Courtside will tell the Operator first, unless the law forbids it). Courtside will tell the Operator if it believes an instruction breaks Privacy Laws.
2. **Not sell or misuse.** Never sell Customer Data, use it for advertising, combine it with other data to profile Customers for anyone else, or use it to train AI models.
3. **Confidentiality.** Ensure that everyone authorized to access Customer Data is bound by confidentiality and accesses it only as needed for their job.
4. **Security.** Maintain the safeguards in Section 5.
5. **Assist with requests.** Help the Operator respond to Customers' requests to access, correct, delete or port their information, and forward any such request it receives directly about the Operator's records.
6. **Assist with compliance.** Provide reasonable information and help with the Operator's privacy impact assessments, regulator inquiries and breach notifications.
7. **Delete or return.** On termination, follow Section 8 of the Agreement: an export on request for 30 days, then deletion or de-identification under Courtside's retention schedule, except where the law requires retention.

## 3. Subprocessors

The Operator authorizes Courtside to use these subprocessors:

| Subprocessor | Purpose | Location |
|---|---|---|
| Supabase | Database, authentication, file storage | United States |
| DigitalOcean | API hosting | United States |
| Vercel | Web hosting | United States |
| Trigger.dev | Scheduled tasks (reminders, message sending, data clean-up) | United States / European Union |
| Twilio SendGrid | Email delivery | United States |
| Twilio | Text message delivery, where enabled | United States |
| Retell AI | AI phone assistant — call handling, recording, transcription | United States |
| OpenAI | Language model used by the AI phone assistant | United States |
| ElevenLabs | Voice generation for the AI phone assistant | United States |
| Expo | Mobile push notification delivery | United States |
| Sentry | Mobile crash reporting, where enabled | United States |

**Stripe** processes payments under the Operator's own agreement with Stripe; it is not Courtside's subprocessor.

Courtside binds each subprocessor by written contract to protect personal information at least as well as this DPA requires, and remains responsible for them. Courtside will give the Operator **at least 30 days' notice** (by email or in the dashboard) before adding or replacing a subprocessor. The Operator may object on reasonable privacy grounds; if we can't resolve the objection, the Operator may close its account.

## 4. Transfers outside Canada

Customer Data is stored and processed in the United States (and, for some tasks, the European Union) by the subprocessors above. The Operator acknowledges these transfers. Courtside will protect transferred information by contract with safeguards comparable to Canadian standards, and, where Québec law applies, will provide the information the Operator needs for the assessment required before communicating personal information outside Québec.

## 5. Security measures

Courtside maintains technical and organizational safeguards appropriate to the sensitivity of the information, including:

- encryption in transit (TLS/HTTPS, HSTS) and at rest (by our hosting providers);
- isolation between operators' data enforced on the server for every request, with client-side database access disabled, and adversarial testing of that isolation;
- role-based access for the Operator's staff, and least-privilege access for Courtside personnel;
- hashed staff PINs and hashed service credentials;
- rate limiting on public and sign-in endpoints;
- signature verification of webhooks from payment and telephony providers;
- audit logging of significant actions;
- no storage of payment card numbers (cards are handled by Stripe, a PCI DSS Level 1 service provider);
- backups maintained by our database provider;
- review of our safeguards as the Services change.

## 6. Security incidents

If Courtside becomes aware of unauthorized access to, disclosure of, or loss of Customer Data in its or its subprocessors' care (a "**Security Incident**"), it will:

- **notify the Operator without undue delay, and in any case within 72 hours** of becoming aware, with what is known about the incident, the information affected, and steps taken;
- update the Operator as more becomes known, take reasonable steps to contain and remediate it, and keep a record of it;
- help the Operator assess whether there is a real risk of significant harm (or, in Québec, a risk of serious injury), and with any notification to regulators and affected people that the Operator must give.

Notice of a Security Incident isn't an admission of fault.

## 7. Audits

On request (no more than once a year, or after a Security Incident or at a regulator's request), Courtside will answer the Operator's reasonable written security and privacy questions and provide relevant documentation. Any further audit must be agreed in advance, at the Operator's cost, on reasonable notice, during business hours, and subject to confidentiality.

## 8. The Operator's commitments

The Operator will:

- have the right to collect Customer Data and give it to Courtside, and give Customers any notices and obtain any consents Privacy Laws require for its use of the Services — including for promotional messages and, where applicable, for recording calls through the AI phone assistant;
- not instruct Courtside to process Customer Data in a way that breaks the law;
- use role-based access to limit its staff to the information they need, and keep credentials secure;
- use Customers' shared profile only to serve those Customers;
- respond to Customers' privacy requests about its records, with Courtside's help.

## 9. Retention

Courtside keeps Customer Data according to the retention periods in its Privacy Policy, unless the Operator instructs otherwise within what the law allows, or the law requires longer retention.

## 10. Term

This DPA lasts as long as Courtside processes Customer Data for the Operator, including after the Agreement ends.

**Contact:** Privacy Officer, Courtside AI Inc., 60 Spy Ct, Unit 2, Markham, Ontario L3R 5H6, Canada · **contact@court-side.ai**
