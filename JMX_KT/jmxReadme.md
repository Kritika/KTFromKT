
# JMX Demo with Prometheus 

Supporting document for youtube video 


## Initial Set Up


* [Download Jmx Exporter](https://github.com/prometheus/jmx_exporter)
* [Download Prometheus](https://prometheus.io/download/)


## Demo Steps


1. Copy DemoService.java, DemoServiceMBean.java, manifest.txt

2. Build Jar
```shell
  javac DemoService.java DemoServiceMBean.java
  jar cfm DemoService.jar Manifest.txt DemoService.class  DemoServiceMBean.class

```
3. Create config.yaml and start Jmx Exporter

```config.yaml
rules:
- pattern: ".*"
```

```shell
java -javaagent:/Users/kritika/Desktop/JMX/jmx_prometheus_javaagent-0.19.0.jar=8080:/Users/kritika/Desktop/JMX/config.yaml -jar DemoService.jar
```

4. Update Prometheus yaml with jmx target and start server
```prometheus.yml
  - job_name: 'jmx-exporter'
    static_configs:
      - targets: ['localhost:8080']
```

```shell
./prometheus
```

5. Check Prometheus UI
7. Open Jconsole to modify MBean Attributes and check change in prometheus UI
```shell
jconsole
```

## References

1. https://www.oracle.com/technical-resources/articles/javase/jmx.html
2. https://stackify.com/jmx/

