import Link from "next/link";

export default function LocaleSwitcher() {
    return (
        <div>
            <p>Change Language:</p>
            <Link href={`/en`} locale='en'>
                English
            </Link>
            <Link href='/de' locale='de'>
                Deutsch
            </Link>
        </div>
    );
}
