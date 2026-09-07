import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { PERSONAL_INFO } from '@/data/resume-data';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#090d16',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://anandhu-chandran.dev'),
  title: `${PERSONAL_INFO.name} | DevOps Engineer | CI/CD & Cloud Infrastructure`,
  description:
    'Official portfolio of Anandhu Chandran, DevOps Engineer with 2+ years of experience in CI/CD automation (Jenkins), containerization (Docker, Kubernetes), configuration management (Ansible), and Linux environments.',
  keywords: [
    'Anandhu Chandran',
    'DevOps Engineer',
    'CI/CD Pipeline',
    'Jenkins',
    'Docker',
    'Kubernetes',
    'Ansible',
    'Terraform',
    'AWS',
    'Linux Ubuntu CentOS',
    'Grafana',
    'ELK Stack',
    'Liquibase',
    'JFrog Artifactory',
    'Software Version Control',
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.linkedin }],
  creator: PERSONAL_INFO.name,
  publisher: PERSONAL_INFO.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anandhu-chandran.dev',
    title: `${PERSONAL_INFO.name} | DevOps Engineer`,
    description:
      'Results-driven DevOps Engineer with 2+ years of experience in CI/CD automation, containerization, and infrastructure management within Linux environments.',
    siteName: `${PERSONAL_INFO.name} - DevOps Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} | DevOps Engineer`,
    description:
      'DevOps Engineer specializing in Jenkins, Docker, Ansible, Terraform, and Linux production environments.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.title,
    email: PERSONAL_INFO.email,
    telephone: PERSONAL_INFO.phone,
    url: 'https://anandhu-chandran.dev',
    sameAs: [PERSONAL_INFO.linkedin, PERSONAL_INFO.github],
    worksFor: {
      '@type': 'Organization',
      name: 'Muziris Softech (P) Ltd',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Mangalam College of Engineering',
    },
    knowsAbout: [
      'DevOps',
      'CI/CD Automation',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'Ansible',
      'Terraform',
      'AWS',
      'Linux Administration',
      'ELK Stack',
      'Grafana',
      'Liquibase',
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#090d16] text-slate-100 min-h-screen antialiased selection:bg-cyan-500/20 selection:text-cyan-300`}
      >
        {children}
      </body>
    </html>
  );
}
