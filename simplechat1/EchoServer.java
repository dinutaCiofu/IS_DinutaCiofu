// This file contains material supporting section 3.7 of the textbook:
// "Object Oriented Software Engineering" and is issued under the open-source
// license found at www.lloseng.com 

import java.io.*;
import ocsf.server.*;

/**
 * This class overrides some of the methods in the abstract 
 * superclass in order to give more functionality to the server.
 *
 * @author Dr Timothy C. Lethbridge
 * @author Dr Robert Lagani&egrave;re
 * @author Fran&ccedil;ois B&eacute;langer
 * @author Paul Holden
 * @version July 2000
 */
public class EchoServer extends AbstractServer 
{
  //Class variables *************************************************
  
  /**
   * The default port to listen on.
   */
  final public static int DEFAULT_PORT = 5555;
  
  //Constructors ****************************************************
  
  /**
   * Constructs an instance of the echo server.
   *
   * @param port The port number to connect on.
   */
  public EchoServer(int port) 
  {
    super(port);
  }

  
  //Instance methods ************************************************
  
  /**
   * This method handles any messages received from the client.
   *
   * @param msg The message received from the client.
   * @param client The connection from which the message originated.
   */
  public void handleMessageFromClient
    (Object msg, ConnectionToClient client)
  {
    System.out.println("Message received: " + msg + " from " + client);
    this.sendToAllClients(msg);
  }
  public void handleMessageFromServerUI(String message) {
    if (message == null) {
      System.out.println("Client Disconnected");
    }else if(message.equals("#quit")){
      try{
        close();
      }catch (IOException e){
        System.out.println("Error while closing the server");
      }
    }else if(message.equals("#stop")){
      stopListening();
    }else if(message.equals("#close")){
      try{
        close();
      }catch (IOException e){
        System.out.println("Error while closing the server.");
      }
    }else if (message.startsWith("SERVER MSG>")) {
      // Remove the 'SERVER MSG>' prefix before sending to clients
      String messageToSend = message.substring("SERVER MSG>".length());
      this.sendToAllClients("Server Operator: " + messageToSend);
    } else {
      System.out.println("Invalid message format. Messages must be prefixed with 'SERVER MSG>'.");
    }
  }
    
  /**
   * This method overrides the one in the superclass.  Called
   * when the server starts listening for connections.
   */
  protected void serverStarted()
  {
    System.out.println
      ("Server listening for connections on port " + getPort());
  }
  
  /**
   * This method overrides the one in the superclass.  Called
   * when the server stops listening for connections.
   */
  protected void serverStopped()
  {
    System.out.println
      ("Server has stopped listening for connections.");
  }

  protected void clientConnected(ConnectionToClient client) {
    System.out.println("Connected");
  }
  synchronized protected void clientException(
          ConnectionToClient client, Throwable exception)  {
    System.out.println("Disconnected...");
  }


  
  //Class methods ***************************************************
  

  public static void main(String[] args) 
  {
    int port = 0; //Port to listen on

    try
    {
      port = Integer.parseInt(args[0]); //Get port from command line
    }
    catch(Throwable t)
    {
      port = DEFAULT_PORT; //Set port to 5555
    }
	
    EchoServer sv = new EchoServer(port);
    
    try 
    {
      sv.listen(); //Start listening for connections
    } 
    catch (Exception ex) 
    {
      System.out.println("ERROR - Could not listen for clients!");
    }
  }
}
//End of EchoServer class
