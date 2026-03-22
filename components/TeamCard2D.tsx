import React from 'react';

interface TeamCard2DProps {
  member: {
    name: string;
    role: string;
    imageSrc?: string;
  };
  onClick?: () => void;
}

const TeamCard2D: React.FC<TeamCard2DProps> = ({ member, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{
        backgroundColor: '#f7f7f7', // off-white
        color: '#add8e6', // light blue
        border: 'none',
        borderRadius: '8px',
        padding: '20px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}
      aria-label={`Card for ${member.name}`} 
    >
      {member.imageSrc ? (
        <img src={member.imageSrc} alt={member.name} style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
      ) : (
        <div style={{ width: '100px', height: '100px', backgroundColor: '#d3d3d3', borderRadius: '50%' }}></div>
      )}
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </button>
  );
};

export default TeamCard2D;