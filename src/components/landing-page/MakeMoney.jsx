import KickstartJourney from "./KickstartJourney";
import { Link } from "react-router-dom";

const MakeMoney = () => {
    return (
        <div className="md:pt-8">
            <div className="container flex flex-col items-center justify-center pt-24 md:flex-row">
                <div className="container flex flex-col md:flex-row">
                    <div className="overflow-hidden md:w-96">
                        <div>
                            <h1 className="mt-2 text-2xl font-medium font-bricolage-grotesque md:mt-20 md:text-5xl">
                                How to make money on Freebyz
                            </h1>
                        </div>
                        <p className="max-w-2xl mt-8">
                            Freebyz was created for you to make cool cash every day by doing simple social media jobs on YouTube, Facebook, TikTok, Instagram, and other social media platforms.
                        </p>
                        <Link to='/registeration'>
                            <button className="px-4 py-2 mx-auto my-6 text-white rounded-full md:mx-4 bg-customBlue">
                                Sign up for free
                            </button>
                        </Link>
                       
                    </div>

                </div>
                <div className="mt-8">
                    <img src="/images/make-money.png" alt="keyboard-image" />
                </div>
            </div>


            <div className="container flex flex-col items-center py-20 font-medium text-center">
                <p className="text-2xl md:text-5xl font-bricolage-grotesque">Freebyz is 100% legit and many users have earned up to 300k and more...</p>
                <p className="py-2 font-light">Freebyz was created for you to make cool cash every day by doing simple social media jobs on YouTube, Facebook, TikTok, Instagram, and other social media platforms.</p>
                <p className="py-2 font-light">On Freebyz, you can hire online workers to increase your business visibility and organic growth through engagements on Facebook, Instagram, YouTube, TikTok, WhatsApp, and Twitter.</p>
            </div>

            <div className="container md:pt-24">
                <p className="w-48 overflow-hidden text-2xl md:w-96 md:text-5xl font-bricolage-grotesque">Six ways to earn on Freebyz</p>
                <div className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-3">
                    <div>
                        <p className="p-4 text-center text-blue-600 bg-blue-200 border-2 border-blue-500 border-dashed rounded-full w-14">1</p>
                        <p className="py-2 font-semibold">Dollar Wallet</p>
                        <p>You can earn dollars on Freebyz when you have a verified dollar wallet.</p>
                    </div>
                    <div>
                        <p className="p-4 text-center text-blue-600 bg-blue-200 border-2 border-blue-500 border-dashed rounded-full w-14">2</p>
                        <p className="py-2 font-semibold">Afilliate Links</p>
                        <p>You can promote your Affiliate links to earn big money online.</p>
                    </div>
                    <div>
                        <p className="p-4 text-center text-blue-600 bg-blue-200 border-2 border-blue-500 border-dashed rounded-full w-14">3</p>
                        <p className="py-2 font-semibold">Lock Money</p>
                        <p>You can lock money (to avoid spending temptations) in your wallet for 3-6 months and earn up to 5% interest.</p>
                    </div>
                    <div> 
                        <p className="p-4 text-center text-blue-600 bg-blue-200 border-2 border-blue-500 border-dashed rounded-full w-14">4</p>
                        <p className="py-2 font-semibold">Remote Jobs</p>
                        <p>You can do remote jobs by completing tasks and earning. As a verified user, you have access to limitless jobs above ₦10.</p>
                    </div>
                    <div>
                        <p className="p-4 text-center text-blue-600 bg-blue-200 border-2 border-blue-500 border-dashed rounded-full w-14">5</p>
                        <p className="py-2 font-semibold">Dollar Jobs</p>
                        <p>You can earn more by doing dollar jobs and earn directly to your Paypal account or to your local bank (for the dollar equivalent).
                            Feel free to use any of these methods to earn big time on Freebyz.</p>
                    </div>
                    <div>
                        <p className="p-4 text-center text-blue-600 bg-blue-200 border-2 border-blue-500 border-dashed rounded-full w-14">6</p>
                        <p className="py-2 font-semibold">Referral Bonuses</p>
                        <p>You can invite your friends using your referral link and earn ₦500 (or $2.5) on each verified friend. Some users have cashed out more than ₦100,000 at a time by just referring friends and not completing tasks at all.</p>
                    </div>
                </div>
            </div>

            <KickstartJourney />

            <div className="container pt-20">
                <div className="overflow-hidden md:w-96">
                    <p className="py-6 text-2xl font-medium md:text-4xl">How user made millions on Freebyz</p>
                    <p>Last year (2023), a lot of our users became millionaires just by using FREEBYZ and we cannot keep the secrets they used away from you anymore! You can be a millionaire this month as well.</p>
                    <p className="py-2 ">What’s the secret?: <span className="italic font-medium font-style:">YOUR REFERRAL LINK</span></p>
                </div>
            </div>

            <div className="container flex flex-col items-center justify-between gap-24 pt-20 md:flex-row">
                <img src="/images/man-with-phone.png" alt="man-holding-a-phone" className="md:w-[30%]" />
                <div className="overflow-hidden md:w-96">
                    <p className="pb-2">Did you know you are sitting and living with potential millions every day?</p>
                    <p className="pb-2">A lot of your Friends (on the same WhatsApp group (old friends, church, mosque, association, etc), Telegram group and Facebook/Twitter/TikTok have not heard about Freebyz and you can make money (through them) just by telling them about Freebyz.</p>
                    <p>You will be surprised that you belong to more than 10 WhatsApp groups that have at least 100 people each. You are sitting on 1000 persons!</p>
                </div>
            </div>

            <div className="container md:pt-20">
                <div className="overflow-hidden md:w-96">
                    <p className="pb-6">Chai! Right now, copy your referral link and target 100 people in each WhatsApp group.</p>
                    <p>Go to their DMs and tell them about Freebyz, and show them your evidence of withdrawing from Freebyz. You can add them to a WhatsApp/Facebook group to teach them about Freebyz. Give the training a catchy title. Make it Free to attend!</p>
                </div>
            </div>

            <div className="container flex flex-col justify-between pt-20 md:flex-row">
                <div className="overflow-hidden md:w-96">
                    <p className="pb-4 text-2xl md:text-4xl">Be intentional and serious about it</p>
                    <p className="pb-2">Guide them to register and verify. You will get up to 1000 people this month and that is ₦500,000 for you. If you target another 1000 on Youtube/Facebook/Instagram, you will get another ₦500,000 next month.</p>
                    <p className="py-2">It will be LOUD if you refer friends who can verify their dollar wallets (Imagine getting $1.5 referral bonus on 1000 persons).</p>
                    <p className="py-2">Don&apos;t panic, you&apos;re not losing anything by trying! You may just be on your own if you don&apos;t try. Copy your referral link now and stop sitting on MONEY! Good Luck!</p>
                </div>
                <img src="/images/holding-hands.png" alt="two-people-holding-hands" />
            </div>
        </div>
    )
}

export default MakeMoney;