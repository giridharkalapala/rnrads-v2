import React from 'react';
import { Users, Eye, Wallet, Award } from 'lucide-react';

export default function WhyChooseCard({ icon, title, description }) {
  const getIcon = (ic) => {
    switch (ic) {
      case 'users':
        return <Users size={24} color="#00A9E8" />;
      case 'eye':
        return <Eye size={24} color="#00A9E8" />;
      case 'wallet':
        return <Wallet size={24} color="#00A9E8" />;
      case 'award':
        return <Award size={24} color="#00A9E8" />;
      default:
        return <Award size={24} color="#00A9E8" />;
    }
  };

  return (
    <div
      className="hover-card-effect"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '18px',
        padding: '32px 28px',
        border: '1px solid #E5EFF5',
        boxShadow: '0 4px 18px rgba(6, 26, 51, 0.04)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '14px',
          backgroundColor: 'rgba(0, 169, 232, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        {getIcon(icon)}
      </div>

      <h3
        style={{
          fontSize: '20px',
          fontWeight: 800,
          color: '#061A33',
          marginBottom: '10px',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '14px',
          lineHeight: 1.65,
          color: '#64748B',
        }}
      >
        {description}
      </p>
    </div>
  );
}
