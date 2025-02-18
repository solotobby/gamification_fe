const TermsOfUse = () => {
    const terms = [
        "By signing up to Freebyz, you agree to create a wallet where you can access remote/micro tasks as an online worker or a business owner/creator/entrepreneur who wants to post online social media and special digital jobs for online workers.",
        "Your account must be used solely for that purpose or purposes as updated on the website.",
        "Your account may be suspended if you attempt to spam people or post spurious jobs.",
        "All Campaigns/Jobs will be screened before approval.",
        "Every Job (Campaign) you advertise must be approved within 24hrs otherwise those campaigns (Jobs) will be automatically approved.",
        "All users must be verified to access highly paid jobs or withdraw from wallet/Post Jobs.",
        "All users can use referral codes to refer friends.",
        "A sum of 3000 NGN (or equivalent in your currency) is required to verify an account. Withdrawal can be requested any time but payment is only made on Fridays. Minimum withdrawal is 2,500 NGN with 5% withdrawal charges. Withdrawal requests made before 12pm on Fridays will be processed next Friday. Withdrawal will only be made to your bank account or PayPal that matches exactly the names used in registration. Disparities in names can delay payment(s).",
        "You are paid a sum of N1000 (or equivalent in your currency) on every friend you refer to Freebyz using your affiliate link (available on your dashboard).",
        "Unverified users can refer friends but cannot post jobs or make withdrawal(s).",
        "You can play games and quizzes to earn points which can be converted to money."
    ];

    return (
        <div className="container pt-10 md:pt-20 bg-[#F0F8FF]">
            <h1 className="my-8 text-3xl font-bold">Terms of Use</h1>
            <div className="text-base leading-relaxed font-graphik">
                <ol className="space-y-4 list-decimal list-inside font-graphik">
                    {terms.map((term, index) => (
                        <li key={index}>
                            {term}
                        </li>
                    ))}
                </ol>
                <p className="mt-8">
                    This Terms of Use will be updated regularly. You will find the updates in your dashboard.
                </p>
                <p className="mt-4">
                    Thank you for using Freebyz.
                </p>
            </div>
        </div>
    );
}

export default TermsOfUse;