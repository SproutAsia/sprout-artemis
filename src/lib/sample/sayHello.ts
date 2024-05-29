export function sayHelloArtemis(args: {
    firstName: string
    lastName: string
}) {
    console.log("Hello Artemis, by " + [args.firstName, args.lastName].join(' '))
}