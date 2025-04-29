import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Verify() {
  const router = useRouter();
  const { token } = router.query;
  const [status, setStatus] = useState('Verifying...');

  useEffect(() => {
    if (!token) return;
    async function verifyUser() {
      const res = await fetch(`/api/verify-user?token=${token}`);
      if (res.ok) {
        setStatus('Verification Successful!');
      } else {
        setStatus('Verification Failed.');
      }
    }

    verifyUser();
  }, [token]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{status}</h2>
    </div>
  );
}
