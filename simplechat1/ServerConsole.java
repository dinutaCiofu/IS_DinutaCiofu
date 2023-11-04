import common.ChatIF;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ServerConsole implements ChatIF {
    //Class variables *************************************************

    /**
     * The default port to listen on.
     */
    final public static int DEFAULT_PORT = 5555;
    //Instance variables **********************************************

    /**
     * The instance of the client that created this ConsoleChat.
     */
    EchoServer serverr;

//Constructors ****************************************************

    /**
     * Constructs an instance of the ClientConsole UI.
     *
     * @param port The port to connect on.
     */
    public ServerConsole(int port)
    {
        serverr= new EchoServer(port);
    }

    /**
     * This method waits for input from the console.  Once it is
     * received, it sends it to the client's message handler.
     */
    public void accept()
    {
        try
        {
            BufferedReader fromConsole =
                    new BufferedReader(new InputStreamReader(System.in));
            String message;

            while (true)
            {
                message = fromConsole.readLine();
                serverr.handleMessageFromServerUI(message);
            }
        }
        catch (Exception ex)
        {
            System.out.println("Unexpected error while reading from console!");
        }
    }
    /**
     * This method overrides the method in the ChatIF interface.  It
     * displays a message onto the screen.
     *
     * @param message The string to be displayed.
     */
    public void display(String message)
    {
        System.out.println("> " + message);
    }

    //Class methods ***************************************************

    /**
     * This method is responsible for the creation of the Client UI.
     *
     */

    public static void main(String[] args)
    {

        String host = "";
        int port = 0;  //The port number

        try
        {
            host = args[0];
            port = Integer.parseInt(args[1]);
        }
        catch(ArrayIndexOutOfBoundsException e)
        {
            host = "localhost";
            port = DEFAULT_PORT;
        }
        ServerConsole chat= new ServerConsole(port);
        chat.accept();  //Wait for console data
    }
}
