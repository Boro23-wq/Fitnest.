import { Layout } from '@/components/Layout';
import ProfileTable from '@/components/ProfileTable';
import { PageSeo } from '@/components/SEO';
import { Spinner } from '@/components/Spinner';
import {
    Alert,
    AlertDescription,
    AlertIcon,
    Box,
    CloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const {
        isOpen: isVisible,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: true });

    useEffect(() => {
        if (!session) {
            router.push('/');
        }
    });

    return (
        <>
            <PageSeo
                title={`About - ${session?.user?.name}`}
                description={session?.user?.email}
                url={session?.user?.image}
            />
            <Layout>
                {status === 'loading' && <Spinner />}

                <div className={`max-w-20 ${isVisible ? 'mb-6' : 'mb-0'}`}>
                    {isVisible && (
                        <Alert
                            status="success"
                            variant="solid"
                            paddingRight="30px"
                            width="fit-content"
                            backgroundColor={'#66cc99'}
                            color="white"
                            fontWeight="50"
                            borderRadius={'6px'}>
                            <AlertIcon />
                            <Box>
                                <AlertDescription>
                                    Signed in as {session?.user?.email}!
                                </AlertDescription>
                            </Box>
                            <CloseButton
                                alignSelf="flex-start"
                                position="relative"
                                right={-5}
                                onClick={onClose}
                            />
                        </Alert>
                    )}
                </div>

                <section className="mt-2">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
                        Your Profile
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Fitnest doesn&apos;t and won&apos;t collect any
                        information without your permission. We respect your
                        privacy! Here you can access your personal details and
                        modify them based on your liking.
                    </p>
                </section>

                <ProfileTable />
            </Layout>
        </>
    );
}
