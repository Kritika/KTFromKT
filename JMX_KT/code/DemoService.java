import java.lang.management.ManagementFactory;
import javax.management.*;
import java.util.Scanner;

public class DemoService implements DemoServiceMBean {
    private int counter = 0;

    public void incrementCounter() {
        counter++;
    }

    public int getCounter() {
        return counter;
    }

    public static void main(String[] args) throws InterruptedException {

        String jmxExporterPath = "/Users/kritika/Desktop/JMX/jmx_prometheus_javaagent-0.19.0.jar";
        String configPath = "/Users/kritika/Desktop/JMX/config.yaml";
        String jmxExporterOpts = String.format(
                "-javaagent:%s=8080:%s",
                jmxExporterPath,
                configPath
        );

        // Print JMX Exporter options
        System.out.println("JMX Exporter Options: " + jmxExporterOpts);

        // Create MBean server
        MBeanServer mbs = ManagementFactory.getPlatformMBeanServer();

        // Create and register MBean
        DemoService demoService = new DemoService();
        ObjectName name;
        try {
            name = new ObjectName("com.example:type=DemoService");
            mbs.registerMBean(demoService, name);
        } catch (MalformedObjectNameException | InstanceAlreadyExistsException |
                MBeanRegistrationException | NotCompliantMBeanException e) {
            e.printStackTrace();
            return;
        }

        // Print instructions
        System.out.println("DemoService is running. Connect to JMX using JConsole or other JMX tools.");
        System.out.println("Prometheus can scrape metrics on http://localhost:8080/metrics");
        System.out.println("Press 'Enter' to exit.");

        // Keep the application running until user presses Enter
        try (Scanner scanner = new Scanner(System.in)) {
            scanner.nextLine();
        }
    }


}
