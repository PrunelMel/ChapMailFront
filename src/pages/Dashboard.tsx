import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import EmailCard from '../components/EmailCard';
const Dashboard = () => {

  const emails = [
    {
      id: 1,
      sender: 'John Doe',
      subject: 'Welcome to Anonymous Mail',
      snippet: 'Thank you for signing up to our platform...',
      date: 'Sep 17',
      isRead: false,
    },
    {
      id: 2,
      sender: 'Jane Smith',
      subject: 'Your Account Has Been Updated',
      snippet: 'We have updated your account settings...',
      date: 'Sep 16',
      isRead: true,
    },
    // Ajoute d'autres emails ici
  ];
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="p-4">
      {emails.map((email) => (
        <EmailCard
          key={email.id}
          sender={email.sender}
          subject={email.subject}
          snippet={email.snippet}
          date={email.date}
          isRead={email.isRead}
        />
      ))}
    </div>
    </div>
  )
}

export default Dashboard