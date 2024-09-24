import EmailCard from './EmailCard'; // Importation du composant EmailCard

interface Email {
    sender: string,
    subject: string,
    snippet: string,
    date: string,
    isRead: boolean
}
const EmailList = ({ emails }: { emails: Email[] }) => {
  return (
    <div className="flex flex-col bg-gray-900 p-1 rounded-lg shadow-lg">
      {emails.length === 0 ? (
        <p className="text-gray-400 text-center">Aucun email à afficher</p>
      ) : (
        emails.map((email) => (
          <EmailCard  
            sender={email.sender}
            subject={email.subject}
            snippet={email.snippet}
            date={email.date}
            isRead={email.isRead}
          />
        ))
      )}
    </div>
  );
};

export default EmailList;
